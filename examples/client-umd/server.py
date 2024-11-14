from starlette.applications import Starlette
from starlette.responses import FileResponse
from starlette.routing import Route
import uvicorn

async def homepage(request):
    return FileResponse('index.html')

async def serve_js(request):
    return FileResponse('dist/umd/my-library.umd.js')

routes = [
    Route('/', homepage),
    Route('/dist/umd/my-library.umd.js', serve_js)
]

app = Starlette(debug=True, routes=routes)

if __name__ == "__main__":
    uvicorn.run(app, host='127.0.0.1', port=8000)