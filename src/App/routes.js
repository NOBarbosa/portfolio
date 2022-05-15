import React from 'react';
import{
    Route,
    Routes
} from 'react-router-dom';


const Main = React.lazy(async () => import('../Pages/Main').then((m) =>({default: m.Main})));
const Projects = React.lazy(async () => import('../Pages/Projects').then((m) =>({default: m.Projects})))
const Home = React.lazy(async () => import('../Pages/Home').then((m) =>({default: m.Home})))
const About = React.lazy(async () => import('../Pages/About').then((m) =>({default: m.About})))
const Page404 = React.lazy( async () => import('../Pages/Page404').then((m) =>({default: m.Page404})))


export function MyRoutes(){
    return(
        <Routes>
            <Route path = '/' element={<Main/>}>
                <Route path='' element={<Home/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/about' element={<About/>} />
            </Route>
            <Route path='*' element={<Page404 />} />
        </Routes>
    )
}