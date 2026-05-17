from fastapi import APIRouter, HTTPException
from app.models.user_model import UserRegister, UserLogin
from app.database import users_collection
from app.utils.hash import hash_password, verify_password
from app.utils.auth import create_access_token

router = APIRouter()

@router.post("/register")
async def register(user: UserRegister):

    existing_user = await users_collection.find_one({
        "email": user.email
    })

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="User already signed up. Please login."
        )

    hashed_password = hash_password(user.password)

    new_user = {
        "name": user.name,
        "email": user.email,
        "password": hashed_password
    }

    await users_collection.insert_one(new_user)

    return {
        "message": "Signup successful"
    }

@router.post("/login")
async def login(user: UserLogin):

    db_user = await users_collection.find_one({
        "email": user.email
    })

    if not db_user:
        raise HTTPException(
            status_code=400,
            detail="You should signup first."
        )

    valid_password = verify_password(
        user.password,
        db_user["password"]
    )

    if not valid_password:
        raise HTTPException(
            status_code=400,
            detail="Invalid password"
        )

    token = create_access_token({
        "email": db_user["email"]
    })

    return {
        "access_token": token,
        "token_type": "bearer"
    }