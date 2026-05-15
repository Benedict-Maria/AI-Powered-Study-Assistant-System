from fastapi import APIRouter
from app.database import tasks_collection
from app.models.task_model import TaskModel

router = APIRouter()

@router.post("/tasks")
async def create_task(task: TaskModel):

    new_task = task.dict()

    await tasks_collection.insert_one(new_task)

    return {
        "message": "Task created"
    }

@router.get("/tasks")
async def get_tasks():

    tasks = []

    async for task in tasks_collection.find():

        task["_id"] = str(task["_id"])

        tasks.append(task)

    return tasks