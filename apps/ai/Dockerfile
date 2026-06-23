# 1. Choose a stable, slim Python base image
FROM python:3.11-slim

# 2. Set the working directory
WORKDIR /usr/src/app

# 3. Copy the requirements file first (for caching)
COPY requirements.txt ./

# 4. Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copy the rest of the Python code
COPY . .

# 6. Expose the API port
EXPOSE 8000

# 7. Run the FastAPI server. 
# 0.0.0.0 is required so Docker maps the internal port to the outside host.
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]