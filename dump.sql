--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-07-02 13:42:41 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16763)
-- Name: travels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.travels (
    id integer NOT NULL,
    origin text NOT NULL,
    destiny text NOT NULL,
    shipping_cost numeric(10,2) NOT NULL
);


ALTER TABLE public.travels OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16762)
-- Name: travels_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.travels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.travels_id_seq OWNER TO postgres;

--
-- TOC entry 3591 (class 0 OID 0)
-- Dependencies: 214
-- Name: travels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.travels_id_seq OWNED BY public.travels.id;


--
-- TOC entry 3439 (class 2604 OID 16766)
-- Name: travels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.travels ALTER COLUMN id SET DEFAULT nextval('public.travels_id_seq'::regclass);


--
-- TOC entry 3585 (class 0 OID 16763)
-- Dependencies: 215
-- Data for Name: travels; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.travels (id, origin, destiny, shipping_cost) FROM stdin;
2	China	Brasil	122.00
\.


--
-- TOC entry 3592 (class 0 OID 0)
-- Dependencies: 214
-- Name: travels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.travels_id_seq', 2, true);


--
-- TOC entry 3441 (class 2606 OID 16770)
-- Name: travels travels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT travels_pkey PRIMARY KEY (id);


-- Completed on 2023-07-02 13:42:41 -03

--
-- PostgreSQL database dump complete
--

