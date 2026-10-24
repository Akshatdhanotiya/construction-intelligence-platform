import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse

from backend.routes.safety_routes import router as safety_router
from backend.routes.crack_routes import router as crack_router
from backend.routes.valuation_routes import router as valuation_router
from backend.routes.planning_routes import router as planning_router
from backend.routes.daily_log_routes import router as daily_log_router
from backend.routes.weather_routes import router as weather_router
from backend.routes.knowledge_routes import router as knowledge_router
from backend.routes.report_routes import router as report_router

app = FastAPI(
    title="AI-Powered Multimodal Construction Intelligence Platform",
    description="Full-Stack Decision-Support System for Construction Planning, Execution, and Monitoring.",
    version="2.0.0"
)

# Cross-Origin Resource Sharing (CORS) setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register all 8 epic API routers
app.include_router(safety_router)
app.include_router(crack_router)
app.include_router(valuation_router)
app.include_router(planning_router)
app.include_router(daily_log_router)
app.include_router(weather_router)
app.include_router(knowledge_router)
app.include_router(report_router)

# Mount sample images directory if present
sample_dir = os.path.join(os.path.dirname(__file__), "sample_data")
if os.path.exists(sample_dir):
    app.mount("/sample_data", StaticFiles(directory=sample_dir), name="sample_data")

# Mount built frontend dist for unified production container serving
frontend_dist_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "frontend", "dist")
if not os.path.exists(frontend_dist_dir):
    frontend_dist_dir = os.path.join(os.path.dirname(__file__), "frontend", "dist")
if os.path.exists(frontend_dist_dir):
    app.mount("/static", StaticFiles(directory=frontend_dist_dir), name="static")


@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "AI-Powered Multimodal Construction Intelligence Platform",
        "version": "2.0.0",
        "epics_active": 9,
        "engine_mode": "Multimodal AI + High-Fidelity Domain Engines"
    }

@app.get("/api/info")
async def platform_info():
    return {
        "platform": "Multimodal Construction Intelligence Platform",
        "supported_epics": [
            "Site Safety Monitoring (PPE & Hazard Identification)",
            "Crack & Structural Defect Analysis",
            "Real Estate & Property Valuation",
            "Construction Project Planning & WBS",
            "Daily Site Assistant & Shift Logs",
            "Weather-Aware Construction Advisory",
            "Construction Knowledge & Building Standards Assistant",
            "Multimodal Inspection Studio & Image Annotation",
            "Executive Audit & Certification Reporting"
        ],
        "data_contract_specification": "Strict JSON / Pydantic v2 Validated"
    }

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"error": "InternalServerError", "message": str(exc)}
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
