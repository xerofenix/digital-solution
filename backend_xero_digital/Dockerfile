# backend_xero_digital/Dockerfile
FROM python:3.9-slim

WORKDIR /app

# Copy requirements.txt relative to context root (current folder)
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copy all source code relative to context root
COPY . .

EXPOSE 8000

# Run FastAPI app using uvicorn (ensure uvicorn in requirements)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
