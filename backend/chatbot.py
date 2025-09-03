from fastapi import FastAPI
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings
from langchain.document_loaders import PyPDFLoader

app = FastAPI()


@app.get("/chat")
def chat(query: str):
    return {"respuesta": f"Aquí responderá el bot a: {query}"}
