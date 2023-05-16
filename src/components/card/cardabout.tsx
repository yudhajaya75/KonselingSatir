import React from 'react';
import '../card/cardabout.css';
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <div className='cardabt'>
            <div className='cardab'>
                <div className='card-about'>
                    <div className='cardbd'>
                        <img className='card-img' src='./images/dokter.webp' alt='logo' />
                        <div className='card-body'>
                            <h3 className='card-title'>Webminar</h3>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.asdasdas</p>
                            <Link to='/layanan/webminar'>
                                <button className='card-cta'>Lihat Selengkapnya</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cardab'>
                <div className='card-about'>
                    <div className='cardbd'>
                        <img className='card-img' src='./images/dokter.webp' alt='logo' />
                        <div className='card-body'>
                            <h3 className='card-title'>Layanan konseling individu pasangan & keluarga</h3>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.asdasdas</p>
                            <Link to='/layanan'>
                                <button className='card-cta'>Lihat Selengkapnya</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cardab'>
                <div className='card-about'>
                    <div className='cardbd'>
                        <img className='card-img' src='./images/dokter.webp' alt='logo' />
                        <div className='card-body'>
                            <h3 className='card-title'>Pelatihan</h3>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.asdasdas</p>
                            <Link to='/layanan/pelatihan'>
                                <button className='card-cta'>Lihat Selengkapnya</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cardab'>
                <div className='card-about'>
                    <div className='cardbd'>
                        <img className='card-img' src='./images/dokter.webp' alt='logo' />
                        <div className='card-body'>
                            <h3 className='card-title'>Konsultasi</h3>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.asdasdas</p>
                            <Link to='/layanan/konsultasi'>
                                <button className='card-cta'>Lihat Selengkapnya</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
