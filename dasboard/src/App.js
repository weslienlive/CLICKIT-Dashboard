import React from 'react';
import styled from 'styled-components';


export default function App(){
        return(
                <Grid>
                    <Header>
                    </Header>

                    <Overview>
                        <Profile>
                            <ProfilePicture>
            `               </ProfilePicture>
                        </Profile>

                        <RevenueBox>
                        </RevenueBox>

                        <OrdersBox>
                        </OrdersBox>

                        <SalesBox>
                        </SalesBox>
                    </Overview>

                    <Sales>
                    </Sales>

                    <Orders>
                    </Orders>
                    
                    <Maps>    
                    </Maps>
                </Grid>
        );
}


// contentor principal do css grid
const Grid = styled.div`
display:grid;
grid-template-columns:repeat(4,300px);
grid-template-rows: 80px 300px 500px 500px 500px;
`;

// style para o Header
const Header = styled.div`
grid-column: 1/ span 5;
height:80px;
background-color: purple;
`;

// style para o Overview
const Overview = styled.div`
display:grid;
grid-template-colums: repeat(4,300px);
grid-column: 1/ span 5;
height: 300px;
background-color: yellow;
`;

// style para o Sales
const Sales = styled.div`
grid-column: 1/ span 5;
height: 500px;
background-color: blue;
`;

// style para Orders
const Orders= styled.div`
grid-column: 1/ span 5;
height: 500px;
background-color:orange;
`;

// style para Maps
const Maps = styled.div`
grid-column: 1/ span 5;
height: 500px;
background-color:violet;
`;

// style para Profile
const Profile = styled.div`
display:grid;
grid-template-columns: repeat(3, 90px);
grid-template-row: repeat(3, 100px);
grid-column:1;
align-self:center;
background-color:darksalmon;
width: 300px;
height:280px;
`;

const RevenueBox = styled.div`
margin: 5px;
grid-column:2;
align-self:center;
background-color:cornsilk;
width: 300px;
height: 280px;
`;


const OrdersBox = styled.div`
margin: 5px;
grid-column:3;
align-self:center;
background-color: brown;
width: 300px;
height: 280px;
`;

const SalesBox = styled.div`
margin: 5px;
grid-column:4;
align-self:center;
background-color:darkgrey;
width: 300px;
height: 280px;
`;

const SalesHeader = styled.div`
grid-row:1;
background-color:lightslategray;
`;

const ProfilePicture = styled.div`
grid-row: 2
background-color: khaki;
`;
