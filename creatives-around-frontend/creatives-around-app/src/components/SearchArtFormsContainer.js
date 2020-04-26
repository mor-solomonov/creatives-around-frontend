import React, { useState } from 'react';
import '../styles/App.css';
import TitleWithSymbol from './SymbolsandTitles/TitleWithSymbol';
import DisplayTitle from './SymbolsandTitles/DisplayTitle';
import { Link } from 'react-router-dom';

const SearchArtFormsContainer = props => {
  //Setup the form state
  //If you need anything else on the form such as text input fields add them here and don't
  //forget to add them to the de-construction below
  const [formData, setFormData] = useState({
    chk1: false,
    chk2: false,
    chk3: false,
    chk4: false,
    chk5: false,
    chk6: false,
    chk7: false,
    chk8: false,
    chk9: false,
    chk10: false
  });

  //De-structure the form
  const {
    chk1,
    chk2,
    chk3,
    chk4,
    chk5,
    chk6,
    chk7,
    chk8,
    chk9,
    chk10
  } = formData;
  //On submit event. Here you will create the code to post to your backend
  const onSubmit = async e => {
    e.preventDefault();
  };

  //Click event listener for checkboxes
  //This code puts all the names and the true or false flags into state.
  const checkboxClick = e => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };
  //Create the JSX for the form and the checkboxes.
  //The trick is to use the name attribute as the link to the formData object
  //and the defaultChecked attribute.

  const backClick = () => {
    props.history.go(-1);
  };
  return (
    <div className="App-Container">
      <TitleWithSymbol title="" />

      <DisplayTitle
        title="Select your Search Art forms"
        className="myArtFormsTitle"
      />
      <section className="section-container myArtFormsContainer">
        <form className="form myArtFormsForm" onSubmit={e => onSubmit(e)}>
          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              name="chk1"
              onClick={e => checkboxClick(e)}
              defaultChecked={chk1}
            />
            <label className="label">Oil color</label>
          </div>

          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              name="chk2"
              onClick={e => checkboxClick(e)}
              defaultChecked={chk2}
            />
            <label className="label">Acrylic color</label>
          </div>

          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              name="chk3"
              onClick={e => checkboxClick(e)}
              defaultChecked={chk3}
            />
            <label className="label">Water color</label>
          </div>

          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              name="chk4"
              onClick={e => checkboxClick(e)}
              defaultChecked={chk4}
            />
            <label className="label">Print making</label>
          </div>

          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              name="chk5"
              onClick={e => checkboxClick(e)}
              defaultChecked={chk5}
            />
            <label className="label">Sculpture</label>
          </div>

          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              name="chk6"
              onClick={e => checkboxClick(e)}
              defaultChecked={chk6}
            />
            <label className="label">Drawing</label>
          </div>

          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              name="chk7"
              onClick={e => checkboxClick(e)}
              defaultChecked={chk7}
            />
            <label className="label">Jewelry</label>
          </div>

          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              name="chk8"
              onClick={e => checkboxClick(e)}
              defaultChecked={chk8}
            />
            <label className="label">Digital Art</label>
          </div>

          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              name="chk9"
              onClick={e => checkboxClick(e)}
              defaultChecked={chk9}
            />
            <label className="label">Still Life</label>
          </div>

          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              name="chk10"
              onClick={e => checkboxClick(e)}
              defaultChecked={chk10}
            />
            <label className="label">Ceramics</label>
          </div>

          <h4 className="FormHeader">Search all art forms</h4>
          <label class="switch travelSwitch">
            <input type="checkbox" unchecked />
            <span class="slider round" />
          </label>
        </form>
        <div className="text-center">
          <div className="SubmitButtonArtForms text-center">
            <button onClick={backClick} className=" btn btn-light mb-4">
              Submit
            </button>
          </div>
          <div className="GoBackButtonArtForms text-center">
            <button onClick={backClick} className=" btn btn-light mb-4">
              Go Back
            </button>
          </div>

          <div className="text-center">
            <p className="cannot-find-artform">
              Cannot find an Art Form?&nbsp;&nbsp;
              <Link to="/contactus">
                <b>Write us</b>{' '}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchArtFormsContainer;
