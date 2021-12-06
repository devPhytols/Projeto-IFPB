import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./footer.css";

export default function BarraTopo(){
    return (
        <>
        <div class="site-footer">
            <div class="container">
                <div class="row">
                <div class="col-sm-12 col-md-6">
                    <p class="text-justify">Modelo Desenvolvido por <a href="https://github.com/devPhytols">Fernandes</a> no 3° Périodo <i>IFPB</i>.</p>
                </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text">Copyright &copy; 2021 Todos os Direitos Reservados.</p>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}