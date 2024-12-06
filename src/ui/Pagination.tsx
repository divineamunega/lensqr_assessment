import styles from "./Pagination.module.scss";
import React, { Dispatch, SetStateAction } from "react";
import { createPageNumbers } from "../utils/createPageNumbers";

type PaginationType = {
	total: number;
	limit: number;
	currPage: number;
	setCurrPage: Dispatch<SetStateAction<number>>;
};

const Pagination = ({
	total,
	limit,
	currPage,
	setCurrPage,
}: PaginationType) => {
	const totalPages = Math.ceil(total / limit);

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrPage(page);
		}
	};

	return (
		<div className={styles.pagination}>
			{/* Previous Button */}
			<button
				disabled={currPage === 1}
				onClick={() => handlePageChange(currPage - 1)}
				className={styles.arrowBtn}
			>
				{"<"}
			</button>

			{/* Page Numbers */}
			{createPageNumbers(totalPages, currPage).map((number, i, arr) => {
				const isEllipsis = i === 3 && arr[2] + 1 !== arr[3];

				return (
					<React.Fragment key={number}>
						{isEllipsis && <p>...</p>}
						<button
							onClick={() => handlePageChange(number)}
							className={`${currPage === number ? styles.active : ""}`}
						>
							{number}
						</button>
					</React.Fragment>
				);
			})}

			<button
				disabled={currPage === totalPages}
				onClick={() => handlePageChange(currPage + 1)}
				className={styles.arrowBtn}
			>
				{">"}
			</button>
		</div>
	);
};

export default Pagination;
