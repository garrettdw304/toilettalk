import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const buildings = [
  { name: "Skyline Tower", rating: 4.5 },
  { name: "Greenwood Apartments", rating: 3.8 },
  { name: "Downtown Lofts", rating: 4.2 },
  { name: "Lakeside Residences", rating: 4.7 },
];

const BuildingRatings = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {buildings.map((building, index) => (
        <Card key={index} className="p-4 rounded-2xl shadow-md">
          <CardContent>
            <h2 className="text-xl font-bold">{building.name}</h2>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.round(building.rating) ? "text-yellow-500" : "text-gray-300"}`}
                  fill={i < Math.round(building.rating) ? "#facc15" : "none"}
                />
              ))}
              <span className="ml-2 text-gray-600">({building.rating})</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BuildingRatings;