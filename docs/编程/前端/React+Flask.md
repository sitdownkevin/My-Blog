---
title: React + Flask
---
# {{ $frontmatter.title }}
:::tip 
A trial of combination of frontend (React) and backend (Flask), which could be used as scaffold for other projects. 
:::

## File Structure

前后端分离

```
# File Struc

| backend
  | app.py
  | .flaskenv
| frontend
  | public
    | ...
  | src
    | ...
  | package.json
  | tsconfig.json
  | yarn.lock
| .gitignore
| README.md
| requirement.txt
| run.bat
```

## 措施

::: code-group

```json [frontend/package.json]
{
  "name": "frontend",
  "version": "0.1.0",
  "proxy": "http://localhost:3001", // [!code focus]
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^13.0.0",
    "@testing-library/user-event": "^13.2.1",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.7.13",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "typescript": "^4.4.2",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version" 
    ]
  }
}

```

```txt [backend/.flaskenv]
FLASK_APP=app.py
FLASK_DEBUG=1
FLASK_RUN_HOST=0.0.0.0
FLASK_RUN_PORT=3001 // [!code focus]
```


```python [backend/app.py]
from flask import Flask
from flask import render_template_string
from flask_cors import CORS // [!code focus]

app = Flask(__name__)
CORS(app) // [!code focus]


@app.route('/')
def home():
    return render_template_string('<h1>Hello, this is backend based on FLask</h1>')


cnt = 1
@app.route('/api/hello')
def hello_from_flask():
    global cnt
    cnt += 1
    return 'Count: {}'.format(cnt)


if __name__ == '__main__':
    app.run()

```
:::