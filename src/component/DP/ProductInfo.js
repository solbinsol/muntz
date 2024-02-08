import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import style from "../../styles/DP/ProductInfo.module.css";

import axios from "axios";

export default function DetailPage() {
    const [selectedTab, setSelectedTab] = useState('description');

  const router = useRouter();
  const [product, setProduct] = useState(null);
// DetailPage.js

// ... (이전 코드)
useEffect(() => {
    const fetchProduct = async () => {
        const { product_id } = router.query;

        try {
            if (!product_id) {
                console.error('Product ID is not provided.');
                return;
            }

            // 기존의 상품 정보를 가져오는 API
            const productResponse = await axios.get(`http://localhost:5000/api/product/${product_id}`);
            console.log('Product API Response:', productResponse.data);

            // 새로 추가한 ProductDetails 정보를 가져오는 API
            const productDetailsResponse = await axios.get(`http://localhost:5000/api/detail/${product_id}`);
            console.log('ProductDetails API Response:', productDetailsResponse.data);

            // 제품의 사이즈 정보를 가져오는 API
            const sizeResponse = await axios.get(`http://localhost:5000/api/size/${product_id}`);
            console.log('Size API Response:', sizeResponse.data);

            // 제품의 재고 정보를 가져오는 API
            const stockResponse = await axios.get(`http://localhost:5000/api/stock/${product_id}`);
            console.log('Stock API Response:', stockResponse.data);

            // 받아온 상품 정보, ProductDetails 정보, 사이즈 정보, 재고 정보를 합쳐서 상태에 저장
            const productWithDetailsAndSize = { 
                ...productResponse.data, 
                ...productDetailsResponse.data, 
                sizes: sizeResponse.data, 
                stock: stockResponse.data 
            };
            setProduct(productWithDetailsAndSize);
        } catch (error) {
            console.error('API 호출 오류:', error);
        }
    };

    fetchProduct();
}, [router.query.product_id]);

  return (
    <div>
      <div className={style.DetailPage}>
        <div className={style.DetailBox}>
          {product ? (
            <div>
                <div className={style.ImgBox}>
                <img src={product.thumbnail_image} alt={product.product_name} />
                {/* 다른 상품 정보를 표시하는 컴포넌트를 추가하면 됩니다. */}

                {/* ... 기타 필요한 정보 표시 */}
                </div>
                <div className={style.DetailText}>
                    <h3 className={style.DetailTitle}>Product Info <span className={style.Gray}>제품정보</span></h3>
                    <h3 className={style.ClosetName}>{product.product_name}</h3>
                        <p className={style.PP}>좋아요: {product.likes}</p>
                        <p className={style.PP}>조회: {product.view_count}</p>
                    <p className={style.Price}>{product.price}원</p>
                    <div className={style.Nav}>
                        <p className={selectedTab === 'description' ? style.selectedTab : ''}
                        onClick={() => setSelectedTab('description')}>
                        description
                        </p>
                        <p className={selectedTab === 'delivery' ? style.selectedTab : ''}
                        onClick={() => setSelectedTab('delivery')}>
                        delivery
                        </p>

                        <div className={style.description} style={{ display: selectedTab === 'description' ? 'block' : 'none' }}>
                            {product.description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                <p>{line}</p>
                                <br />
                                </React.Fragment>
                            ))}
                        </div>

                        <div className={style.delivery} style={{ display: selectedTab === 'delivery' ? 'block' : 'none' }}>
                            <li>
                                배송은 평균 3~5일 정도 소요되고  있습니다.
                            </li>
                            <li>
                                교환 및 환불에 관한 문의는 공지사항을 참고해 주시기 바랍니다.
                            </li>
                            <li>
                                 택배사 : 
                            </li>
                            <li>
                                배송비 : 
                            </li>
                        </div>
                        <div className={style.SizeTable}>
                        <p className={style.TableT}>* 측정 방식에 따라 약간의 차이가 있을 수 있습니다. </p>
                        <table>
                            <thead>
                            <tr>
                                <th>사이즈</th>
                                {product.sizes && product.sizes.map((size, index) => (
                                <th key={index}>{size.size_type}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {['S', 'M', 'L'].map((sizeType, sizeIndex) => (
                                <tr key={sizeIndex}>
                                <td>{sizeType}</td>
                                {product.sizes && product.sizes.map((size, sizeIndex) => (
                                    // size_value가 존재하는 경우에만 해당 td를 렌더링
                                    <React.Fragment key={sizeIndex}>
                                    {size[`size_value_${sizeType.toLowerCase()}`] && (
                                        <td>{size[`size_value_${sizeType.toLowerCase()}`]}</td>
                                    )}
                                    </React.Fragment>
                                ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <select className={style.SizeSelect}>
                        {['S', 'M', 'L'].filter(sizeType =>
                                product.sizes.some(size => size[`size_value_${sizeType.toLowerCase()}`])
                            ).map((sizeType, index) => (
                                <option key={index} disabled={product.stock && product.stock[`stock_quantity_${sizeType.toLowerCase()}`] === 0}>
                                    {sizeType} {product.stock && product.stock[`stock_quantity_${sizeType.toLowerCase()}`] === 0 && '(품절)'}
                                </option>
                            ))}                 
                        </select>
                        </div>
                        <div className={style.BtnBox}>
                            <button className={style.BtnBuy}>BUY NOW</button>
                            <button className={style.BtnLike}>♥</button>
                            <button className={style.BtnBag}>바구니</button>
                        </div>        


    
                    </div>

                </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
