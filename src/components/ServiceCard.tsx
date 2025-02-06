import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink text-center text-white basis-0 min-w-[240px]">
      {imageSrc && (
        <div className="flex flex-col justify-center items-center self-center max-w-full min-h-[75px] w-[124px]">
          <img
            loading="lazy"
            src={imageSrc}
            alt=""
            className="object-contain w-full aspect-[1.91]"
          />
        </div>
      )}
      <div className="flex flex-col mt-6 w-full">
        <h2 className="text-3xl font-bold leading-tight">{title}</h2>
        <p className="mt-6 text-base leading-6">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
