import PropTypes from 'prop-types';

const Arrow = (props) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-24 mr-1 ">
      <span className="mb-4">{props.text}</span>
      <div className="border-t-2 border-gray-500 absolute w-full"></div>
      <div className="bg-gray-500 w-3 h-3 transform rotate-45 absolute right-0"></div>
    </div>
  );
};

Arrow.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Arrow;