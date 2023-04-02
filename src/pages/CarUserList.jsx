import React, {useState} from 'react'
import { usersInfo } from '../utils/generateUsers';
import ReactPaginate from 'react-paginate';
import Sidebar from '../components/Sidebar';
import { DEFAULT_PER_PAGE } from '../utils/constants';

export default function CarUserList() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCar, setSetectedCar] = useState("");
  const offset = currentPage * DEFAULT_PER_PAGE;
  const carUserData = usersInfo.reduce((acc, user) => {
    return {...acc, [user.vehicle_model]: acc[user.vehicle_model] ? [...acc[user.vehicle_model], user.username] : [user.username]}
  }, {})

  const renderItem = (item) => <div onClick={() => { setIsOpen(true); setSetectedCar(item)}}>{item}</div>

  const currentPageData = Object.keys(carUserData).slice(offset, offset + DEFAULT_PER_PAGE).map((car) => renderItem(car));

  const pageCount = Math.ceil(carUserData.length / DEFAULT_PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) =>{
    setCurrentPage(selectedPage);
  }
console.log(carUserData)
  return (
    <div>
      {isOpen ? <Sidebar onClose={() => setIsOpen(false)}>{carUserData[selectedCar]}</Sidebar> : null}
      {currentPageData}
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  )
}
