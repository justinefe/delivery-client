import { FC } from "react";
import { NavLink } from "react-router-dom";

interface CardProps {
  Icon?: any;
  title: string;
  description: string;
  background?: string;
  handleDelete: any;
  className?: string;
  textColor?: string;
  maintextClassName?: string;
  subtextClassName?: string;
  iconClassName?: string;
  cards: any;
  id: number | string;
  owner: string;
  accessPerm: boolean | undefined;
}

const Card: FC<CardProps> = ({
  Icon,
  title,
  description,
  accessPerm,
  background,
  id,
  className,
  textColor,
  maintextClassName,
  subtextClassName,
  iconClassName,
  owner,
  handleDelete,
}) => {
  return (
    <div
      style={{ background }}
      className={`rounded-br20 mt-4 bg-white relative shadow-cardShadow flex flex-col grow pt-3 pb-[25px] px-7 ${
        className || ""
      }`}
    >
      <div className={`flex justify-end ${iconClassName || ""}`}>{Icon}</div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <span
            className={`font-montserrat ${
              textColor || "text-dark-grey-800"
            }  font-medium ${
              maintextClassName || "text-[44px] leading-[54px] mt-6"
            }}`}
          >
            {title}
          </span>
          {accessPerm ? (
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  handleDelete(id);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Iconly/Light/Delete">
                    <g id="Delete">
                      <path
                        id="Stroke 1"
                        d="M19.325 9.4682C19.325 9.4682 18.782 16.2032 18.467 19.0402C18.317 20.3952 17.48 21.1892 16.109 21.2142C13.5 21.2612 10.888 21.2642 8.28003 21.2092C6.96103 21.1822 6.13803 20.3782 5.99103 19.0472C5.67403 16.1852 5.13403 9.4682 5.13403 9.4682"
                        stroke="red"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Stroke 3"
                        d="M20.7082 6.2397H3.75024"
                        stroke="red"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Stroke 5"
                        d="M17.4406 6.2397C16.6556 6.2397 15.9796 5.6847 15.8256 4.9157L15.5826 3.6997C15.4326 3.1387 14.9246 2.7507 14.3456 2.7507H10.1126C9.53358 2.7507 9.02558 3.1387 8.87558 3.6997L8.63258 4.9157C8.47858 5.6847 7.80258 6.2397 7.01758 6.2397"
                        stroke="red"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </g>
                </svg>
              </button>
              <NavLink
                to="/edit"
                state={{
                  title,
                  description,
                  id,
                }}
                className="w-full flex justify-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Iconly/Light/Document">
                    <g id="Document">
                      <path
                        id="Stroke 1"
                        d="M15.7161 16.2234H8.49609"
                        stroke="#577c9e"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Stroke 2"
                        d="M15.7161 12.0369H8.49609"
                        stroke="#577c9e"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Stroke 3"
                        d="M11.2511 7.8601H8.49609"
                        stroke="#577c9e"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Stroke 4"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.9085 2.7498C15.9085 2.7498 8.23149 2.7538 8.21949 2.7538C5.45949 2.7708 3.75049 4.5868 3.75049 7.3568V16.5528C3.75049 19.3368 5.47249 21.1598 8.25649 21.1598C8.25649 21.1598 15.9325 21.1568 15.9455 21.1568C18.7055 21.1398 20.4155 19.3228 20.4155 16.5528V7.3568C20.4155 4.5728 18.6925 2.7498 15.9085 2.7498Z"
                        stroke="#577c9e"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </g>
                </svg>
              </NavLink>
            </div>
          ) : (
            ""
          )}
        </div>
        <span
          className={` ${textColor || "text-dark-grey-100"} font-medium ${
            subtextClassName || "mt-2"
          }`}
        >
          {description}
        </span>
        <span
          className={`font-montserrat ${
            textColor || "text-dark-grey-800"
          }  font-medium ${
            maintextClassName || "text-[px] leading-[54px] mt-6"
          }}`}
        >
          ~ {owner}
        </span>
      </div>
    </div>
  );
};
export default Card;
