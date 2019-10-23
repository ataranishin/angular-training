import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPerson,getPersonImage}) => {
        return (
          <ItemDetails
            itemId={11}
            getData={getPerson}
            getImageUrl={getPersonImage} >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
          </ItemDetails>
        );
        }
      }
    </SwapiServiceConsumer>
  )
}


const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPlanet,getPlanetImage})=>{
        return (
          <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation period" />
            <Record field="costInCredits" label="Cost in credits" />
          </ItemDetails>
        )
        }
      }
    </SwapiServiceConsumer>
  )
};

const StarshipDetails= ({itemId}) => {
  return (
    <SwapiServiceConsumer>
    {
      ({getStarship,getStarshipImage}) => {
        return (
          <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage} >
              <Record field="model" label="Model" />
              <Record field="length" label="Length" />
              <Record field="costInCredits" label="Cost" />
          </ItemDetails>
        )
      }
    }
    </SwapiServiceConsumer>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
