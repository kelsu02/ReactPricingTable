const Table = (props) => {
    return (
        <div className={`$pricing-table ${props.tableOrientation}`}>
            {props.children}
        </div>
    );
}

const Block = (props) => {
    return (
        <div className={`pricing-plan {props.blockColor}`}>
            {props.children}
        </div>
    );
}

const Header = (props) => {
    return (
        <div className='plan-header'>
            {props.header}
        </div>
    );
}

const Price = (props) => {
    return (
        <div className="plan-price">
            <span className="plan-price-amount">
                <span className="plan-price-currency">
                    {'$'}
                </span>
                {props.planPrice}
            </span>
            {'/month'}
        </div>
    );
}

const ItemsHolder = (props) => {
    return (
        <div className="plan-items">
            {props.children}
        </div>
    );
}

const Item = (props) => {
    return (
        <div className="plan-item">
            {props.item}
        </div>
    );
}

const Footer = (props) => {
    return(
        <div className="plan-footer">
            {props.children}
        </div>
    );
}

const Button = (props) => {
    return(
        <button className="button is-fullwidth" disabled={props.boolean}>
            {props.buttonName}
        </button>
    )
}