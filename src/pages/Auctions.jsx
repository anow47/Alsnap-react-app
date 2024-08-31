import { useState, useEffect } from 'react';
import './auctions.css';
import auctionsData from '../Data/auctionsData';

export default function Auctions() {
    const [auctions, setAuctions] = useState(auctionsData);

    useEffect(() => {
        const today = new Date();

        const updatedAuctions = auctions.map(auction => {
            const auctionDateParts = auction.date.split(' ')[1].split('/');
            const auctionDate = new Date(
                parseInt(auctionDateParts[2]), // year
                parseInt(auctionDateParts[1]) - 1, // month (0-based)
                parseInt(auctionDateParts[0]) // day
            );

            if (today > auctionDate) {
                return { ...auction, status: 'finished' };
            }
            return auction;
        });

        setAuctions(updatedAuctions);
    }, [auctions]);

    return (
        <div className="auctions">
            <section className="auctions_banner"></section>
            {/* Running Auctions Section */}
            <section className="auctions_feature">
                <div className='running-side-title'>
                    <h1 className='running'>مزادات قادمة</h1>
                </div>
                <div className="container">
                    <div className="row feature_inner">
                        {auctions.filter(auction => auction.status === 'running').map((auction, index) => (
                            <div className="col-lg-4 col-sm-6" key={index}>
                                <div className="feature_item">
                                    <div className="img_container">
                                        <img src={auction.img} alt="" />
                                    </div>
                                    <div className="content-frame-link">
                                        <h2 className='title'>{auction.title}</h2>
                                        <span className='date running'>{auction.date}</span>
                                        <div className='buttons-container flex'>
                                            <a href={auction.detailsUrl} className="btn-link">التفاصيل</a>
                                            <a href={auction.conatctUrl} className="btn-link">للتواصل</a>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className='buttom-section'>
                <div className='side-title'>
                    <h1 className='finished'>مزادات منتهية</h1>
                </div>
                {/* Finished Auctions Section */}
                <section className="auctions_feature">
                    <div className="container">
                        <div className="row feature_inner">
                            {auctions.filter(auction => auction.status === 'finished').map((auction, index) => (
                                <div className="col-lg-4 col-sm-6" key={index}>
                                    <div className="feature_item">
                                        <div className="img_container">
                                            <img src={auction.img} alt="" />
                                        </div>
                                        <div className="content-frame-link">
                                            <h2 className='title'>{auction.title}</h2>
                                            <span className='date finished'>{auction.date}</span>
                                            <div className='buttons-container flex'>
                                                <a href={auction.detailsUrl} className="btn-link">التفاصيل</a>
                                                <a href={auction.conatctUrl} className="btn-link">للتواصل</a>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}