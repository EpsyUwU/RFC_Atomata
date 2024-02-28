import PropTypes from 'prop-types';

const CircleRecursive = (props) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-24">
      <div className="bg-gray-500 rounded-full w-12 h-12 flex items-center justify-center">
        <span>{props.text}</span>
      </div>
    </div>
  );
};

CircleRecursive.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CircleRecursive;