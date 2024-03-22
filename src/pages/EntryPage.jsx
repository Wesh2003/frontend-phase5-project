import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Entry from "../components/Entry";

function EntryPage({isAuthenticated}) {
  // State to track authentication status
 

  

  return (
    <div className='EntryPageage'>
      <NavBar/>
      <Entry/>
      <Footer/>
    </div>
  );
}

export default EntryPage;