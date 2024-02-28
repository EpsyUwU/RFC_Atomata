import PropTypes from 'prop-types';

const EndCircle = (props) => {
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
    <div className="relative flex items-center justify-center w-24">
        <div className={`${getColorClass(props.color)} rounded-full w-12 h-12 flex items-center justify-center`}>
            <span>{props.text}</span>
        </div>
        <span className='ml-2'>End</span>
    </div>
  );
};

EndCircle.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default EndCircle;