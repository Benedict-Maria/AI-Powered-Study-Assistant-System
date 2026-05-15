from motor.motor_asyncio import AsyncIOMotorClient
from app.config import MONGO_URL, DATABASE_NAME

client = AsyncIOMotorClient(MONGO_URL)

database = client[DATABASE_NAME]

users_collection = database["users"]
tasks_collection = database["tasks"]
plans_collection = database["plans"]