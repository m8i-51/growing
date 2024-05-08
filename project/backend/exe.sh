#!/bin/bash

python app/db.py
gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker -b 0.0.0.0
