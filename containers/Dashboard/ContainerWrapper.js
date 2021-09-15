import styled from "styled-components";

const padding = "20px";

const ContainerWrapper = styled.div`
    display: flex;

    .sidebar{
        width: 59px;
        flex-shrink:  0;
        padding: ${padding} 0;
        background-color: #FBFAFF;
        height: 100vh;
        min-height: 500px;
        position: sticky;
        top: 0;
        overflow: hidden;
        transition: 0.3s;
        border-right: 1px solid rgb(0,0,0,0.125);

        &.show{
            width: 300px;
            padding: ${padding};
        }

        .MuiPaper-elevation1{
            box-shadow: none !important;
        }

        .MuiAccordion-root:before{
            display: none !important;
        }

        .MuiAccordionSummary-content.Mui-expanded {
            margin: 0 !important;
        }

        .MuiAccordionSummary-root.Mui-expanded {
            min-height: 48px !important;
        }

        .MuiAccordion-root.Mui-expanded {
            margin: 0px !important;
        }

        .select{
            color: #6D71C4 !important;
        }
    }

    .rightside{
        flex: 1;

        header{
            background-color: white;
            position: sticky;
            top: 0;
            z-index: 1000;

            .logo{
                height: 20px
            }
        }
        .content{
            padding: ${padding};
        }
    }
`;

export default ContainerWrapper;