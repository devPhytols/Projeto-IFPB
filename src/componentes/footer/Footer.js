import React from "react";
import Logoifpb from "../../imagens/logoifpb.png";
import "./footer.css";

export default function BarraTopo(){
    return (
        <>
        <div class="site-footer">
            <div class="container">
                <div class="row">
                <div class="col-sm-12 col-md-6">
                    <img className="logoifpb" src={Logoifpb} alt=""/>
                    <p class="text-justify">Projeto Desenvolvido por <a href="https://github.com/devPhytols"><b>Fernandes</b></a>, <a href="https://github.com/"><b>Letuan</b></a> e <a href="https://github.com/"><b>Crislandia</b></a> no 3° Périodo <i>IFPB</i>.</p>
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