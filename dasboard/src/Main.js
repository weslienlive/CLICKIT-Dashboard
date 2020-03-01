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
grid-template-columns:repeat(5, 400px);
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
gri
background-color: pink;
width: 400px;
height:280px;
`;

