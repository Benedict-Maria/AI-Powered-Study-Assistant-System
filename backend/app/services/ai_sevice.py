def generate_study_plan(subjects):

    plan = []

    for subject in subjects:

        plan.append({
            "subject": subject,
            "hours": 2
        })

    return plan