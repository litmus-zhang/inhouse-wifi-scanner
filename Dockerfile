FROM python3.10

WORKDIR /app

COPY requirements.txt /app/

CMD [ "pip",  "install" , "-r", "requirements.txt" ]

RUN "uvicorn app.main:app --reload"

