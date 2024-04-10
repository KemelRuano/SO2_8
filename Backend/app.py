from flask import Flask, request, jsonify
from flask_cors import CORS
from db import query

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return "Ok" , 200

@app.route('/dashboard', methods=['GET'])
def Dashboard():
   
    results = query("SELECT * FROM dashboard")
    ListaPid = []
    ListaPorcentaje = []
    for i in results:
        ListaPid.append(i[0])
        ListaPorcentaje.append(i[3])

    ListaDatos = []
    for i in results:
        ListaDatos.append({
            "pid": i[0],
            "name": i[1],
            "memoria": i[2],
            "cpu": i[3]
        })

    list_map = {
        "ListaPid": ListaPid,
        "ListDatos": ListaPorcentaje,
        "ListTable": ListaDatos
    }

    return  jsonify(list_map)


@app.route('/solicitud', methods=['GET'])
def Solicitud():
    results = query("SELECT * FROM solicitud")

    list_map = []
    for i in results:
        list_map.append({
            "pid": i[0],
            "call": i[1],
            "size": i[2],
            "fecha": i[3]
        })
  
    return  jsonify(list_map)
if __name__ == '__main__':
    app.run( host= '0.0.0.0' , debug=True , port=3000)