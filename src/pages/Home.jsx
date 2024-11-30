import Header from "../components/Header";
import Content from "../components/Content";
import Event from "../components/Event";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Home = () => {
  useEffect(() => {
    Swal.fire({
      title: 'Created by: <br><img src="/assets/creator.jpg" class="custom-image" alt="Profile Picture"><br>Md. Rakib Hassan',
      html: '<p>ID: 213-15-4411</p>',
      timer: 7000, 
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false
    });
  }, []);
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Event></Event>
      <Reservation></Reservation>
      <Footer></Footer>
    </div>
  );
};

export default Home;
