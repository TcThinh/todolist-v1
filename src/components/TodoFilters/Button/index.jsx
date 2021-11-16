import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import Filters from '../../../constans/filters';

function FilterButton(props) {
    const { title, link, isActived, onButtonClick } = props;

    const getStatusFilterButton = () => {
        let status = Filters.ALL;
        if (link.toLowerCase() === Filters.ACTIVE.toLowerCase()) status = Filters.ACTIVE
        else if (link.toLowerCase() === Filters.COMPLETED.toLowerCase()) status = Filters.COMPLETED
        return status;
    }

    const onFilterButtonClick = () => {
        const status = getStatusFilterButton();
        console.log(status);
        onButtonClick(status);
    }

    return (
        <button
            className={`todo__filters--button ${isActived ? "todo__filters--button-actived" : ""}`}
            onClick={onFilterButtonClick}
        >
            {title}
        </button>
    )
}

FilterButton.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    isActived: PropTypes.bool,
    onButtonClick: PropTypes.func,
}

FilterButton.defaultProps = {
    title: '',
    link: '',
    isActived: false,
    onButtonClick: null,
}


export default FilterButton;

