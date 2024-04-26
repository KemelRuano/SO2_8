from flask import Flask, request, jsonify
from flask_cors import CORS
from db import query
import random
app = Flask(__name__)
CORS(app)

@app.route('/dashboard2', methods=['GET'])
def dashboard():
    results = []
    for i in range(3):  # Generar 3 procesos aleatorios
        pid = f"PID{i+1}"
        nombre = f"Proceso{i+1}"
        memoria = random.randint(512, 8192)  # Generar memoria aleatoria entre 512 y 8192 KB
        cpu = random.randint(10, 90)  # Generar CPU aleatoria entre 10 y 90
        results.append((i+1, pid, nombre, memoria, cpu))

    ListaPid = []
    ListaPorcentaje = []
    ListaDatos = []

    for i in results:
        ListaPid.append(i[1])
        ListaPorcentaje.append(float(i[4]))
        ListaDatos.append({
            "pid": i[1],
            "name": i[2],
            "memoria": int(i[3]) / 1000,
            "cpu": i[4]
        })

    list_map = {
        "ListaPid": ListaPid,
        "ListDatos": ListaPorcentaje,
        "ListTable": ListaDatos
    }

    return jsonify(list_map)

@app.route('/')
def index():
    return "Ok" , 200

@app.route('/dashboard', methods=['GET'])
def Dashboard():
   
    results = query("SELECT * FROM Proyecto2.dashboard;")

    ListaPid = []
    ListaPorcentaje = []
    for i in results:
        ListaPid.append(i[1])
        ListaPorcentaje.append(float(i[4]))

    ListaDatos = []
    for i in results:
        ListaDatos.append({
            "pid": i[1],
            "name": i[2],
            "memoria": int(i[3])/1000,
            "cpu": i[4]
        })


    list_map = {
        "ListaPid": ListaPid,
        "ListDatos": ListaPorcentaje,
        "ListTable": ListaDatos
    }

    return  jsonify(list_map)


@app.route('/solicitud', methods=['GET'])
def Solicitud():
    results = query("SELECT * FROM  Proyecto2.llamada;")

    list_map = []
    for i in results:
        list_map.append({
            "pid": i[1],
            "call": i[2],
            "size": int(i[3])/1000,
            "fecha": i[4].strftime("%Y/%m/%d %H:%M:%S")
        })
        print(i[4])
  
    return  jsonify(list_map)
if __name__ == '__main__':
    app.run( host= '0.0.0.0' , debug=True , port=3000)