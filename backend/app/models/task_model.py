from pydantic import BaseModel

class TaskModel(BaseModel):
    title: str
    subject: str
    deadline: str
    completed: bool = False