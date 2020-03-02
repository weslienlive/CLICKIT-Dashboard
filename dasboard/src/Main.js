import React, {Component} from 'react';
import styled from 'styled-components';


export default class Main extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <StyledHeader>
                    </StyledHeader>

                    <StyledOverview>
                        <StyledProfile>
                        </StyledProfile>

                        <StyledRevenueBox>
                        </StyledRevenueBox>

                        <StyledOrdersBox>
                        </StyledOrdersBox>

                        <StyledSalesBox>
                        </StyledSalesBox>
                    </StyledOverview>

                    <StyledSales>
                    </StyledSales>

                    <StyledOrders>
                    </StyledOrders>
                    
                    <StyledMaps>    
                    </StyledMaps>
                </Grid>
            </div>
        );
    }
}


// contentor principal do css grid
const Grid = styled.div`
display:grid;
grid-template-columns:repeat(4,30px);
grid-template-rows: 80px 300px 500px 500px 500px;
`;

// style para o Header
const StyledHeader = styled.div`
grid-column: 1/ span 5;
height:80px;
background-color: purple;
`;

// style para o Overview
const StyledOverview = styled.div`
display:grid;
grid-template-colums: repeat(4,300px);
grid-column: 1/ span 5;
height: 300px;
background-color: yellow;
`;

// style para o Sales
const StyledSales = styled.div`
grid-column: 1/ span 5;
height: 500px;
background-color: blue;
`;

// style para Orders
const StyledOrders= styled.div`
grid-column: 1/ span 5;
height: 500px;
background-color:orange;
`;

// style para Maps
const StyledMaps = styled.div`
grid-column: 1/ span 5;
height: 500px;
background-color:violet;
`;

// style para Profile
const StyledProfile = styled.div`
margin: px;
grid-column:1;
align-self:center;
background-color:darksalmon;
width: 300px;
height:280px;
`;

const StyledRevenueBox = styled.div`
margin: 5px;
grid-column:2;
align-self:center;
background-color:cornsilk;
width: 300px;
height: 280px;
`;


const StyledOrdersBox = styled.div`
margin: 5px;
grid-column:3;
align-self:center;
background-color: brown;
width: 300px;
height: 280px;
`;

const StyledSalesBox = styled.div`
margin: 5px;
grid-column:4;
align-self:center;
background-color:darkgrey;
width: 300px;
height: 280px;
`;

const StyledSalesHeader = styled.div`
grid-row:1;
background-color:lightslategray;
`;
