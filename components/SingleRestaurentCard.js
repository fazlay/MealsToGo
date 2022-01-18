import * as React from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native"

import { Card } from "react-native-paper";

import { SvgXml } from "react-native-svg";
import star from '../assets/star'
import open from '../assets/open'

const RestaurentCard = styled(Card)`
background-color:white;
`
const RestaurentCardCover= styled(Card.Cover)`
padding:20px;
background-color:white;
`
const Info =styled.View`
padding:${(props)=>props.theme.space[3]};
`
const Section = styled.View`
flex-direction:row;
align-items:center;
`
const SectionEnd= styled.View`
flex:1;
flex-direction:row;
justify-content:flex-end
`

const Rating = styled.View`
flex-direction:row;
padding-top:${(props)=>props.theme.space[2]};
padding-bottom:${(props)=>props.theme.space[2]};
`

const Address =styled(Text)`
font-family: ${(props)=>props.theme.fonts.body  }
font-size: ${(props)=>props.theme.fontSizes.caption  }
`
const Title =styled(Text)`
font-family: ${(props)=>props.theme.fonts.heading  }
font-size: ${(props)=>props.theme.fontSizes.body  }

color: ${(props) => props.theme.colors.ui.primary};`

const SingleRestaurentCard = ({ restaurent = {} }) => {
  const {
    name = "Some Restaurent",
    icon,
    photos = ["https://www.drupal.org/files/project-images/ap_resize.png"],
    address = "100 random street ",
    isOpen = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurent;

const ratingArray = Array.from(new Array(Math.floor(rating)))


  return (
    <RestaurentCard elevation={5} style={styles.card}>
      <RestaurentCardCover key={name} style={styles.cover} source={{ uri: photos[0] }} />
    <Info>
    <Title>{name}</Title>
   <Section>
   <Rating>
   {
      ratingArray.map(()=>(<SvgXml  xml={star} width={20} height={20} />))
    }
    
   </Rating>
   <SectionEnd>
   <SvgXml  xml={open} width={20} align-content={flex-end} height={20} />
   </SectionEnd>
   </Section>
    <Address>{address}</Address>
    </Info>
    </RestaurentCard>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 0, backgroundColor: "white" },
  title: { padding: 16 },
});

export default SingleRestaurentCard;
