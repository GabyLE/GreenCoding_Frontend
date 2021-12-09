import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
//import { Grid } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../src/App.css'

import { AuthContext } from '../context/auth';
//import PostCard from '../components/PostCard';
//import PostForm from '../components/PostForm';
import { ObtenerProyectosQuery } from '../util/graphql';



function Home() {
  
  const { user } = useContext(AuthContext);
  const {
    loading,
    data: { obtenerProyectos: posts }
  } = useQuery(ObtenerProyectosQuery);

//const obj=JSON.parse(JSON.stringify(user))
  return (
    <div>
      <div className="page-title">
        <h1>Proyectos</h1>
      </div>
      <div>
        {user && (
          <div>
          

          </div>
        )}
        {loading ? (
          <h1>cargando proyectos..</h1>
        ) : (
          <div id="dvb" class="container table-responsive py-5" style={{"width":"100%","max-width:":"480px","overflow-x":"scroll"}}>

            <table id="tbl" class="table table-bordered table-hover">


              <thead id="thd" class="text-center table-success">
                <tr>
    
                  <th scope="col">Nombre del proyecto</th>
                  <th scope="col">Objetivo general</th>
                  <th scope="col">Onjetivo especifico</th>
                  <th scope="col">Presupuesto</th>
                  <th scope="col">fecha inicio</th>
                  <th scope="col">fecha fin</th>
                  <th scope="col">estado</th>
                  <th scope="col">fase</th>
                </tr>
              </thead>



              <tbody class="text-center">

                {posts &&
                  posts.map((post) => (
                    <tr key={post.id}>
                     

                      <td>{post.nombreProyecto}</td>
                      <td>{post.objGeneral}</td>
                      <td>{post.objEspecifico}</td>
                      <td>{post.presupuesto}</td>
                      <td>{post.fechaInicio}</td>
                      <td>{post.fechaTermina}</td>
                      <td>{post.estado}</td>
                      <td>{post.fase}</td>
                    </tr>

                  ))}
              </tbody>

            </table>

          </div>

        )}
      </div>
    </div>
  );
}

export default Home;