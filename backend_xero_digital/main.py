# main.py
from fastapi import FastAPI, HTTPException, Request, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
from contextlib import asynccontextmanager
from slowapi import Limiter
from slowapi.util import get_remote_address

import db_setup as db

# Initialize limiter
limiter = Limiter(key_func=get_remote_address)
app = FastAPI(
    docs_url=None,  # Disable docs (Swagger UI)
    redoc_url=None,  # Disable redoc
    openapi_url=None
)
app.state.limiter = limiter

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[ "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["POST","GET"],     # "GET,POST,PUT,OPTIONS, DELETE"
    allow_headers=["Content-Type"],
)

# Pydantic model for request validation
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    service: str
    message: str



# Initialize database on startup
@app.on_event("startup")
def startup():
    db.init_db()

# @asynccontextmanager
# async def lifespan(app:FastAPI):
#     db.init_db()
#     yield


# API endpoint
@app.post("/api/contact")
@limiter.limit("3/minute")
async def submit_contact_form(
    contact: ContactForm,
    request: Request  # This is required for slowapi
):
    try:
        conn = db.get_db_connection()
        cursor = conn.cursor()

        cursor.execute('''
            INSERT INTO contacts (name, email, phone, service, message)
            VALUES (?, ?, ?, ?, ?)
        ''', (contact.name, contact.email, contact.phone, contact.service, contact.message))

        conn.commit()
        contact_id = cursor.lastrowid
        conn.close()

        return {
            "success": True,
            "message": "Contact form submitted successfully",
            "contact_id": contact_id
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error submitting form: {str(e)}"
        )
