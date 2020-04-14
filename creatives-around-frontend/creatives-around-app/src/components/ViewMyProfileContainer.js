import React, { Fragment } from 'react'
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
// Images:
import ProfilePic from '../images/fake_profiles/profile_paintrbush_man.png';
import CoverPic from '../images/fake_profiles/o-SPIEGELMAN-570.jpg';
import PicExample from '../images/fake_profiles/images.jpg';
// Graphics:
import RemoveWhiteCircle from '../images/graphs/remove_white_circle.svg';
import AddPicGallery from '../images/graphs/add_pic_gallery.svg';

const ViewMyProfileContainer = () => {
    return (
        <Fragment>
            <div className='App-Container'>
                <TitleWithSymbol title='My Profile' />
                
                {/* Profile and Cover pics: */}
                <div className='ProfilePicsContainer'>

                    <div className='CoverPic'>
                        <img src={CoverPic} />
                    </div>

                    <div className='ProfilePic'>
                        <img src={ProfilePic} />
                    </div>
                    
                </div>

                {/* Full name, username, location, age */}
                <div className='FullNameUsername'>
                    <h4 className='FullName'>Steve Bloom</h4>
                    <h5>=</h5>
                    <h4 className='Username'>Tweaker</h4>
                </div>

                <div className='LocationAgeContainer'>
                    <div className='ProfileInfoLeft'>
                        <h5>Location</h5>
                        <h4>Berlin</h4>
                    </div>
                    <div className='ProfileInfoRight'>
                        <h5>Age</h5>
                        <h4>33</h4>
                    </div>
                </div>

                {/* Art forms */}
                <h4 className='FormHeader'>Art forms</h4>

{/* Example of Art forms (without remove-button): */}
<div className='ArtFormsCollection'>

    <div className='ArtFormSingle'>
        <p className='ArtFormsText'>
            Water Color
        </p>
    </div>

    <div className='ArtFormSingle'>
        <p className='ArtFormsText'>
            Photography
        </p>
    </div>

    <div className='ArtFormSingle'>
        <p className='ArtFormsText'>
            Acrylic
        </p>
    </div>

    <div className='ArtFormSingle'>
        <p className='ArtFormsText'>
            Sculpture
        </p>
    </div>

    <div className='ArtFormSingle'>
        <p className='ArtFormsText'>
            Digital Art
        </p>
    </div>
    
</div>

                <div className="ViewProfileGallery">
                    <div className="ViewProfileGallerySingle">
                        <img src={AddPicGallery} alt=""/>
                    </div>
                    <div className="ViewProfileGallerySingle">
                        <img src={AddPicGallery} alt=""/>
                    </div>
                    <div className="ViewProfileGallerySingle">
                        <img src={AddPicGallery} alt=""/>
                    </div>
                    <div className="ViewProfileGallerySingle">
                        <img src={AddPicGallery} alt=""/>
                    </div>
                    <div className="ViewProfileGallerySingle">
                        <img src={AddPicGallery} alt=""/>
                    </div>
                    {/* <div className="ViewProfileGallerySingle">
                        <img src={AddPicGallery} alt=""/>
                    </div> */}
                </div>
            </div>
        </Fragment>
    )

};

export default ViewMyProfileContainer;