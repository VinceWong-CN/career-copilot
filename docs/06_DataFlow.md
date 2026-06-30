# 06_DataFlow.md

# Career Copilot —— 数据流设计（Data Flow Architecture）

---

## 1. 概述

本文档定义 Career Copilot 系统中“数据如何流动与被处理”。

重点不是数据结构，而是：

> 数据在 Multi-Agent 系统中的转换路径（Transformation Pipeline）

系统本质是一个：

> Structured Data Reasoning Pipeline（结构化数据推理管道）

---

## 2. 核心设计原则

系统数据流必须遵守：

- 数据必须结构化流动（Structured Flow）
- 数据不得跨越 Agent 跳跃处理
- 每一步输出必须可被下一步消费
- 不允许“直接生成最终结果”

---

## 3. 输入层（Input Layer）

系统接收两个核心输入：

### 3.1 Master Resume（主简历）

用户真实职业经历来源：

- 工作经历
- 项目经验
- 教育背景
- 技能列表

特点：
- 原始数据
- 未结构化
- 真实唯一来源（Source of Truth）

---

### 3.2 Job Description（JD）

目标岗位描述：

- 岗位要求
- 技能需求
- 职责描述
- 隐性信号

特点：
- 非结构化文本
- 需要语义解析

---

## 4. 处理层（Processing Pipeline）

系统通过多个 Agent 顺序处理数据：

---

### Step 1：Candidate Understanding Agent

输入：
- Master Resume

输出：
- Structured Experience Graph

处理内容：
- 提取经历结构
- 标准化角色与职责
- 去除表达噪音

---

### Step 2：Job Understanding Agent

输入：
- Job Description

输出：
- Job Requirement Graph

处理内容：
- 提取 must-have skills
- 提取 nice-to-have skills
- 提取隐性能力要求

---

### Step 3：Skill Mapping Agent

输入：
- Structured Experience Graph
- Job Requirement Graph

输出：
- Skill Mapping Graph

处理内容：
- 建立 experience → skill 映射
- 识别 transferable skills
- 计算 confidence score

---

### Step 4：Gap Analysis Agent

输入：
- Skill Mapping Graph
- Job Requirement Graph

输出：
- Gap Analysis Report

处理内容：
- 找出 missing skills
- 找出 weak signals
- 识别风险点

---

### Step 5：Narrative Agent

输入：
- Skill Mapping Graph
- Gap Analysis Report

输出：
- Resume Narrative Output

处理内容：
- 重写表达（不改事实）
- 优化职业叙事结构
- 生成面试导向表达

---

## 5. 输出层（Output Layer）

系统最终输出包含：

### 5.1 Resume Output

- 优化后的简历表达
- bullet points 重构版本

---

### 5.2 Interview Preparation Output

- 可能面试问题
- 基于经历的回答建议
- 弱点补强建议

---

## 6. 数据流总图（核心）

```text
Master Resume
      ↓
Candidate Understanding Agent
      ↓
Structured Experience Graph
      ↓
Skill Mapping Agent
      ↓
Skill Graph
      ↓
Job Requirement Graph
      ↓
Gap Analysis Agent
      ↓
Narrative Agent
      ↓
Final Resume + Interview Output