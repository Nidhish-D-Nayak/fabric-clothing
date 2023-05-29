import styled from "styled-components";

export const DirectoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-transform: uppercase;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;
