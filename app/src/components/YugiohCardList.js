import React from "react";
import { connect } from "react-redux";

const CardList = (props) => {
  return (
    <>
      {
       
        props.isFetching ? (
          <div> ---retrieving card info--- </div>
        ) : props.error ? (
          <div>{props.error}</div>
        ) : (
          props.cardList.map((card) => {
            return <div>{card.text}</div>;
          })
        )
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.is_fetching,
    cardList: state.cardList,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(CardList);