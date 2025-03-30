import "../styles/Awareness.css";
import React, { useState } from "react";
import foodWasteImage from "../assets/images/foodwaste.jpg";

function Awareness() {
  const [isTextVisible, setIsTextVisible] = useState(false);
  function toggleTextVisibility() {
    setIsTextVisible(prevState => !prevState);
  }

  return (
    <div className="awareness-tab">
      <h2> </h2>
      <h2>Food Waste in Schools</h2>
      
      <p>
        Food waste is a growing problem in schools, with a significant amount of uneaten 
        food being discarded daily. Studies show that nearly <b>40% of food in schools</b> 
        goes to waste, contributing to environmental, economic, and social challenges.
      </p>
      <div className="dropdown">
      <button className="dropbtn" onClick={toggleTextVisibility}>
      Causes of Food Waste in Schools
      </button>
      {isTextVisible && (
        <div className="dropdown-content">
           <ul>
        <li><strong>Oversized Portions:</strong> Many schools serve larger portions than students can finish.</li>
        <li><strong>Unappealing Meals:</strong> If the food lacks flavor or variety, students are less likely to eat it.</li>
        <li><strong>Short Lunch Breaks:</strong> Some students don’t have enough time to finish their meals.</li>
        <li><strong>Strict Food Policies:</strong> Some schools have regulations preventing the sharing or repurposing of food.</li>
        <li><strong>Lack of Awareness:</strong> Many students and staff are unaware of the impact of food waste.</li>
      </ul>
        </div>
      )}
    </div>

    

      <h3>Impact of Food Waste</h3>
      <p>
        Wasting food affects more than just the trash bins—it has serious <b>environmental and economic</b> 
        consequences. Every year, <b>millions of tons of food</b> end up in landfills, contributing to 
        greenhouse gas emissions. Additionally, food waste costs schools <b>thousands of dollars</b>
        that could be spent on better resources for students.
      </p>


      <div className="dropdown">
      <button className="dropbtn" onClick={toggleTextVisibility}>
      How Schools Can Reduce Food Waste
      </button>
      {isTextVisible && (
        <div className="dropdown-content">
          <ul>
        <li><strong>Improved Meal Planning:</strong> Schools can analyze what students actually eat and adjust menus accordingly.</li>
        <li><strong>Food Recovery Programs:</strong> Surplus food can be donated to local shelters instead of being discarded.</li>
        <li><strong>Composting Initiatives:</strong> Schools can compost food waste instead of sending it to landfills.</li>
        <li><strong>Student Awareness Campaigns:</strong> Educating students about food waste can encourage better choices.</li>
        <li><strong>Flexible Portion Sizes:</strong> Allowing students to choose portion sizes reduces waste.</li>
      </ul>
        </div>
      )}
    </div>

      <h3>How You Can Help</h3>
      <p>
        Whether you're a student, teacher, or parent, you can take action! Encourage mindful 
        eating habits, support school food recovery programs, and spread awareness about the 
        importance of reducing waste. Every small effort counts toward creating a more sustainable future.
      </p>

      <div className="image-container">
        <img src={foodWasteImage} alt="Food waste in schools" className="food-waste-image" />
      </div>
    </div>
  );
}

export default Awareness;