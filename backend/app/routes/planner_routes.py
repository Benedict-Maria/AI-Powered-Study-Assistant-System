from fastapi import APIRouter
from app.database import plans_collection
from app.models.planner_model import PlannerModel

router = APIRouter()

@router.post("/plans")
async def create_plan(plan: PlannerModel):

    new_plan = plan.dict()

    await plans_collection.insert_one(new_plan)

    return {
        "message": "Study plan created"
    }

@router.get("/plans")
async def get_plans():

    plans = []

    async for plan in plans_collection.find():

        plan["_id"] = str(plan["_id"])

        plans.append(plan)

    return plans