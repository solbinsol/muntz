import React, { useState } from "react";
import axios from "axios";
import style from "@/styles/AD/ProductAdd.module.css";

export default function ProductAdd() {
  // 상태 값들 설정
  const [selectedProductType, setSelectedProductType] = useState("상의");

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState(1); // 기본값으로 상의 설정
  const [thumbnailImage, setThumbnailImage] = useState("");
  const [detailPageImage, setDetailPageImage] = useState("");
  const [description, setDescription] = useState("");
  const [sizes, setSizes] = useState([
    { size_type: "상의", size_value_s: 0, size_value_m: 0, size_value_l: 0 },
    { size_type: "하의", size_value_s: 0, size_value_m: 0, size_value_l: 0 },
  ]);
  const [stocks, setStocks] = useState({ stock_quantity_s: 0, stock_quantity_m: 0, stock_quantity_l: 0 });

  // 제품 등록 처리 함수
  const handleAddProduct = async () => {
    try {
      // API 호출
      const response = await axios.post("/api/addProduct", {
        productName,
        price,
        categoryId,
        thumbnailImage,
        detailPageImage,
        description,
        sizes,
        stocks,
      });

      console.log(response.data); // 성공 시 응답 데이터 출력
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

    return(
        <div className={style.ProductAdd}>
            <div className={style.Addbox}>
                <form>
                    <div className={style.AddInfo}>
                        <h3>PRODUCT</h3>
                        <p>제품 이름</p>
                        <input type="text" onChange={(e) => setProductName(e.target.value)} />
                    </div>
                    <div className={style.AddInfo}>
                        <p>카테고리</p>
                        <select onChange={(e) => setCategoryId(e.target.value)}>
                        <option value={1}>아우터</option>
                        <option value={2}>상의</option>
                        <option value={3}>하의</option>
                        <option value={4}>기타</option>
                        </select>
                    </div>
                    <div className={style.AddInfo}>
                        <p>가격</p>
                        <input type="number" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className={style.AddInfo}>
                        <p>썸네일 이미지</p>
                        <input type="text" onChange={(e) => setThumbnailImage(e.target.value)} />
                    </div>
                    <div className={style.AddInfo}>
                        <p>상세페이지 이미지</p>
                        <input type="text" onChange={(e) => setDetailPageImage(e.target.value)} />
                    </div>
                    <div className={style.AddInfo}>
                        <p>제품 설명</p>
                        <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className={style.AddInfo}>
                        <h3>Size</h3>
                        <p>제품 타입</p>
                        <select onChange={(e) => setSelectedProductType(e.target.value)}>
                        <option>상의</option>
                        <option>하의</option>
                        </select>
                        {/* option 상의를 선택시 보이는 테이블 */}
                        {selectedProductType === "상의" && (
                        <>
                        <p className={style.TT}>* 존재하는 사이즈만 입력하면 됨 / FREE SIZE : S 에만 입력</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>사이즈</th>
                                    {/* productsize 테이블의 size_type의 자동으로
                                        총장, 가슴 어깨 입력됨
                                    */}
                                    <th>총장</th>
                                    <th>가슴</th>
                                    <th>어깨</th>
                                </tr>
                            </thead> 
                            <tbody>
                                <tr>
                                    <td>
                                        S
                                    </td>
                                    {/* productsize 테이블의 size_value_s */}
                                    {/* 즉 size_type 각각  "총장", "가슴" , "어깨"의 size_value_s */}
                                    <td><input type="number"/></td>
                                    <td><input type="number"/></td>
                                    <td><input type="number"/></td>
                                </tr>
                                <tr>
                                    <td>
                                        M
                                    </td>
                                    {/* productsize 테이블의 size_value_m */}
                                    {/* 즉 size_type 각각  "총장", "가슴" , "어깨"의 size_value_m */}
                                    <td><input type="number"/></td>
                                    <td><input type="number"/></td>
                                    <td><input type="number"/></td>
                                </tr>
                                <tr>
                                    <td>
                                        L
                                    </td>
                                    {/* productsize 테이블의 size_value_l */}
                                    {/* 즉 size_type 각각  "총장", "가슴" , "어깨"의 size_value_l */}
                                    <td><input type="number"/></td>
                                    <td><input type="number"/></td>
                                    <td><input type="number"/></td>
                                </tr>
                            </tbody>
                        </table>
                        </>
                                    )}

                        {/* option 하의를 선택시 보이는 테이블 */}
                        {selectedProductType === "하의" && (
              <>

                        <p className={style.TT}>* 존재하는 사이즈만 입력하면 됨 / FREE SIZE : S 에만 입력</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>사이즈</th>
                                    {/* productsize 테이블의 size_type의 자동으로
                                        총장, 가슴 어깨 입력됨
                                    */}
                                    <th>총장</th>
                                    <th>밑위</th>
                                    <th>허벅지</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        S
                                    </td>
                                    {/* productsize 테이블의 size_value_s */}
                                    {/* 즉 size_type 각각  "총장", "가슴" , "어깨"의 size_value_s */}
                                    <td><input type="number"/></td>
                                    <td><input type="number"/></td>
                                    <td><input type="number"/></td>
                                </tr>
                                <tr>
                                    <td>
                                        M
                                    </td>
                                    {/* productsize 테이블의 size_value_m */}
                                    {/* 즉 size_type 각각  "총장", "가슴" , "어깨"의 size_value_m */}
                                    <td><input type="number"/></td>
                                    <td><input type="number"/></td>
                                    <td><input type="number"/></td>
                                </tr>
                                <tr>
                                    <td>
                                        L
                                    </td>
                                    {/* productsize 테이블의 size_value_l */}
                                    {/* 즉 size_type 각각  "총장", "가슴" , "어깨"의 size_value_l */}
                                    <td><input type="number"/></td>
                                    <td><input type="number"/></td>
                                    <td><input type="number"/></td>
                                </tr>
                            </tbody>
                        </table>
                        </>
            )}
                        <div className={style.AddInfo}>
                               <h3>STOCK</h3>
                            <p className={style.TT2}>FREE SIZE : S 만 등록</p>
                            <p>S 재고</p>
                            <input type="number" onChange={(e) => setStocks({ ...stocks, stock_quantity_s: e.target.value })} />
                        </div>
                        <div className={style.AddInfo}>
                            <p>M 재고</p>
                            <input type="number" onChange={(e) => setStocks({ ...stocks, stock_quantity_m: e.target.value })} />
                        </div>
                        <div className={style.AddInfo}>
                            <p>L 재고</p>
                            <input type="number" onChange={(e) => setStocks({ ...stocks, stock_quantity_l: e.target.value })} />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}