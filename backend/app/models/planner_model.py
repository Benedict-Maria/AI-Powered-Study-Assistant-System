from pydantic import BaseModel

class PlannerModel(BaseModel):
    subject: str
    study_hours: int
    priority: str
    date: str