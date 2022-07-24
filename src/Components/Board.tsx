import {Droppable} from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 10px; 
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
`

const Title = styled.div`
    text-align: center;
    font-weight: 600;
    margin-bottom: 0px;
    font-size: 18px;
`

interface IBoardProps {
    toDos: string[];
    boardId: string;
}

function Board({toDos, boardId}: IBoardProps) {
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(magic) => (
                    <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
                        {toDos.map((toDo, index) => (
                            <DraggableCard key={toDo} toDo={toDo} index={index} />
                        ))}
                        {magic.placeholder}
                    </Wrapper>
                )}
            </Droppable>
        </Wrapper>
    )
}

export default Board;