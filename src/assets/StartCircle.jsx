import PropTypes from 'prop-types';

const StartCircle = (props) => {
  const getColorClass = (color) => {
    switch(color) {
      case 'green':
        return 'bg-green-500';
      case 'red':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="relative flex flex-row items-center justify-center w-24">
      <span className='mr-1'>Start</span>
      <div className="relative flex flex-col items-center">
        {props.topText && <span className="absolute top-0 left-4 mt-[-22px] mr-[-10px]">{props.topText}</span>}
        {props.secondTopText && <span className="absolute top-0 left-0 mt-4">{props.secondTopText}</span>}
        <div className={`${getColorClass(props.color)} rounded-full w-12 h-12 flex items-center justify-center`}>
          <span>{props.text}</span>
        </div>
      </div>
    </div>
  );
};

StartCircle.propTypes = {
  text: PropTypes.string.isRequired,
  topText: PropTypes.string,
  secondTopText: PropTypes.string,
  color: PropTypes.string,
};

export default StartCircle;